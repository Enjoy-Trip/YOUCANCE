	package com.trip.board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.board.model.BoardCommentDto;
import com.trip.board.model.BoardDto;
import com.trip.board.service.BoardService;
import com.trip.jwt.JwtService;
import com.trip.response.model.ResponseDto;
import com.trip.user.model.UserDto;
import com.trip.util.ExceptionHandler;

@RestController
@RequestMapping("/board")
public class BoardController {
	private final String TOKEN = "Access-Token";
	private BoardService boardService;
	private JwtService jwtService;

	public BoardController(BoardService boardService, JwtService jwtService) {
		super();
		this.boardService = boardService;
		this.jwtService = jwtService;
	}
	
	@GetMapping(value = "")
	public ResponseEntity<?> boardList() {
		ResponseDto<List<BoardDto>> response = new ResponseDto<List<BoardDto>>();
		
		try {
			List<BoardDto> rst = boardService.boardList();
			
			response.setState("SUCCESS");
			response.setMessage("게시글 불러오기 성공");
			response.setData(rst);
			
			return new ResponseEntity<ResponseDto<List<BoardDto>>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("게시글을 불러오는 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@GetMapping(value = "/{boardNo}")
	public ResponseEntity<?> boardDetail(@PathVariable("boardNo") int boardNo, HttpServletRequest request) {
		ResponseDto<BoardDto> response = new ResponseDto<BoardDto>();
		
		String token = request.getHeader(TOKEN);
		try {
			BoardDto board = boardService.boardDetail(boardNo);

			if (board == null) {
				response.setState("FAIL");
				response.setMessage("해당 게시글이 존재하지 않습니다.");
			} else {
				
				if(token != null) {
					int userNo = jwtService.getData(token, "userNo");
					
					if (board.getBoardUser().getUserNo() == userNo) {						
						board.setBoardLoginCheck(true);
					}

					
					List<BoardCommentDto> list = board.getboardCommentList();
					BoardCommentDto temp;
					for(int i = 0 ; i < list.size(); i++) {
						temp = list.get(i);
						if(temp.getboardCommentUser().getUserNo() == userNo)
							temp.setBoardCommentLoginCheck(true);
					}
				}					
				response.setState("SUCCESS");
				response.setMessage("게시글 불러오기 성공");
				response.setData(board);
			}
			
			return new ResponseEntity<ResponseDto<BoardDto>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("게시글을 불러오는 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@GetMapping(value = "/{boardNo}/comment")
	public ResponseEntity<?> commentList(@PathVariable("boardNo") int boardNo, HttpServletRequest request) {
		ResponseDto<List<BoardCommentDto>> response = new ResponseDto<List<BoardCommentDto>>();
		
		String token = request.getHeader(TOKEN);
		
		try {
			BoardDto board = boardService.boardDetail(boardNo);

			if (board == null) {
				response.setState("FAIL");
				response.setMessage("해당 게시글이 존재하지 않습니다.");
			} else {
				List<BoardCommentDto> list = board.getboardCommentList();
				
				if(token != null) {
					int userNo = jwtService.getData(token, "userNo");
					
					BoardCommentDto temp;
					
					for(int i = 0 ; i < list.size(); i++) {
						temp = list.get(i);
						
						if(temp.getboardCommentUser().getUserNo() == userNo)
							temp.setBoardCommentLoginCheck(true);
					}
				}
				
				response.setState("SUCCESS");
				response.setMessage("댓글 불러오기 성공");
				response.setData(list);
			}
			
			return new ResponseEntity<ResponseDto<List<BoardCommentDto>>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("댓글을 불러오는 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@PostMapping(value = "")
	public ResponseEntity<?> write(@RequestBody BoardDto boardDto, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		
		try {
			
			if (boardDto.getBoardUser() == null) {
				boardDto.setBoardUser(new UserDto());
			}
			
			boardDto.getBoardUser().setUserNo(jwtService.getData(token, "userNo"));
			
			int rst = boardService.write(boardDto);
			
			response.setState("SUCCESS");
			response.setMessage("게시글 작성 성공");
			response.setData(rst);
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("게시글을 작성 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@PostMapping(value = "/comment")
	public ResponseEntity<?> writeComment(@RequestBody BoardCommentDto commentDto, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		
		try {
			if (commentDto.getboardCommentUser() == null) {
				commentDto.setboardCommentUser(new UserDto());
			}
			
			commentDto.getboardCommentUser().setUserNo(jwtService.getData(token, "userNo"));
			
			int rst = boardService.writeComment(commentDto);
			
			response.setState("SUCCESS");
			response.setMessage("댓글 작성 성공");
			response.setData(rst);
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("댓글 작성 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@PutMapping(value = "/{boardNo}")
	public ResponseEntity<?> updateBoard(@PathVariable("boardNo") int boardNo, @RequestBody BoardDto boardDto, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		
		try {
			BoardDto board = boardService.boardDetail(boardNo);
			
			if (board == null) {
				response.setState("FAIL");
				response.setMessage("해당 게시물이 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");
				
				if (userNo != board.getBoardUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 게시글은 수정할 수 없습니다.");
				} else {
					if (boardDto.getBoardUser() == null) {
						boardDto.setBoardUser(new UserDto());
					}
					
					boardDto.setBoardNo(boardNo);
					boardDto.getBoardUser().setUserNo(userNo);
					
					int rst = boardService.updateBoard(boardDto);
					
					response.setState("SUCCESS");
					response.setMessage("게시글 수정 성공");
					response.setData(rst);
				}
			}
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("게시글을 수정 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@PutMapping(value = "/comment/{commentNo}")
	public ResponseEntity<?> updateComment(@PathVariable("commentNo") int commentNo, @RequestBody BoardCommentDto commentDto, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		
		try {
			BoardCommentDto comment = boardService.getBoardComment(commentNo);
			
			if (comment == null) {
				response.setState("FAIL");
				response.setMessage("해당 댓글이 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");
				
				if (userNo != comment.getboardCommentUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 댓글은 수정할 수 없습니다.");
				} else {
					if (commentDto.getboardCommentUser() == null) {
						commentDto.setboardCommentUser(new UserDto());
					}
					
					commentDto.setboardCommentNo(commentNo);
					commentDto.getboardCommentUser().setUserNo(userNo);
					
					int rst = boardService.updateComment(commentDto);
					
					response.setState("SUCCESS");
					response.setMessage("댓글 수정 성공");
					response.setData(rst);
				}
			}
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("댓글 수정 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@DeleteMapping(value = "/{boardNo}")
	public ResponseEntity<?> delete(@PathVariable("boardNo") int boardNo, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		
		try {
			BoardDto board = boardService.boardDetail(boardNo);
			
			if (board == null) {
				response.setState("FAIL");
				response.setMessage("삭제하고자 하는 게시글이 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");
				
				if (userNo != board.getBoardUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 게시글은 삭제할 수 없습니다.");
				} else {
					int rst = boardService.deleteBoard(boardNo);
					
					response.setState("SUCCESS");
					response.setMessage("게시글 삭제 성공");
					response.setData(rst);
				}
			}
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("게시글을 삭제 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	@DeleteMapping(value = "/comment/{commentNo}")
	public ResponseEntity<?> deleteComment(@PathVariable("commentNo") int commentNo, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		
		try {
			BoardCommentDto comment = boardService.getBoardComment(commentNo);
			
			if (comment == null) {
				response.setState("FAIL");
				response.setMessage("해당 댓글이 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");
				
				if (userNo != comment.getboardCommentUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 댓글은 삭제할 수 없습니다.");
				} else {
					int rst = boardService.deleteComment(commentNo);
					
					response.setState("SUCCESS");
					response.setMessage("댓글 삭제 성공");
					response.setData(rst);
				}
			}
			
			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("댓글 삭제 중 오류가 발생했습니다.");
			
			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
}
