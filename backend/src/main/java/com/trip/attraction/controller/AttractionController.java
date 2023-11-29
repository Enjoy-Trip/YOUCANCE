package com.trip.attraction.controller;

import java.util.HashMap;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trip.attraction.model.AttractionCommentDto;
import com.trip.attraction.model.AttractionDto;
import com.trip.attraction.service.AttractionService;
import com.trip.jwt.JwtService;
import com.trip.response.model.ResponseDto;
import com.trip.user.model.UserDto;
import com.trip.util.ExceptionHandler;

@RestController
@RequestMapping("/attraction")
public class AttractionController {
	private final String TOKEN = "Access-Token";
	private AttractionService attractionService;
	private JwtService jwtService;

	public AttractionController(AttractionService attractionService, JwtService jwtService) {
		super();
		this.attractionService = attractionService;
		this.jwtService = jwtService;
	}

	@GetMapping("")
	public ResponseEntity<?> attractionList(@RequestParam HashMap<String, String> map) {
		ResponseDto<List<AttractionDto>> response = new ResponseDto<List<AttractionDto>>();

		try {
			List<AttractionDto> rst = attractionService.attractionList(map);

			response.setState("SUCCESS");
			response.setMessage("여행지 불러오기 성공");
			response.setData(rst);

			return new ResponseEntity<ResponseDto<List<AttractionDto>>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}

	@GetMapping("/{contentid}")
	public ResponseEntity<?> attractionDetail(@PathVariable("contentid") int contentid) {
		ResponseDto<AttractionDto> response = new ResponseDto<AttractionDto>();

		try {
			AttractionDto rst = attractionService.attractionDetail(contentid);

			if (rst == null) {
				response.setState("FAIL");
				response.setMessage("해당 여행지가 존재하지 않습니다.");
			} else {
				response.setState("SUCCESS");
				response.setMessage("여행지 불러오기 성공");
				response.setData(rst);
			}

			return new ResponseEntity<ResponseDto<AttractionDto>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
	
	
	@GetMapping("/{contentid}/comment")
	public ResponseEntity<?> attractionDetailComment(@PathVariable("contentid") int contentid ,HttpServletRequest request) {
		ResponseDto<List<AttractionCommentDto>> response = new ResponseDto<List<AttractionCommentDto>>();
		String token = request.getHeader(TOKEN);
		
		try {
			List<AttractionCommentDto> rst = attractionService.attractionCommentList(contentid);
			
			if(token !=null) {
				int userNo = jwtService.getData(token, "userNo");
				for(int i = 0 ; i < rst.size(); i++) {
					AttractionCommentDto temp = rst.get(i);
					if(temp.getAttractionCommentUser().getUserNo() == userNo) {
						temp.setAttractionCommentLoginCheck(true);
					}
				}
			}				
			
			if (rst == null) {
				response.setState("FAIL");
				response.setMessage("해당 여행지의 댓글이 존재하지 않습니다.");
			} else {
				response.setState("SUCCESS");
				response.setMessage("댓글 불러오기 성공");
				response.setData(rst);
			}

			return new ResponseEntity<ResponseDto<List<AttractionCommentDto>>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}

	@PostMapping(value = "")
	public ResponseEntity<?> createAttraction(@RequestBody AttractionDto attractionDto, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);

		try {
			if (attractionDto.getAttractionUser() == null) {
				attractionDto.setAttractionUser(new UserDto());
			}

			attractionDto.getAttractionUser().setUserNo(jwtService.getData(token, "userNo"));

			int rst = attractionService.createAttraction(attractionDto);

			response.setState("SUCCESS");
			response.setMessage("여행지 생성 성공");
			response.setData(rst);

			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}

	@PutMapping(value = "/{contentid}")
	public ResponseEntity<?> updateAttraction(@PathVariable("contentid") int contentid,
			@RequestBody AttractionDto attractionDto, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);

		try {
			AttractionDto attr = attractionService.attractionDetail(contentid);

			if (attr == null) {
				response.setState("FAIL");
				response.setMessage("수정하고자 하는 여행지가 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");

				if (userNo != attr.getAttractionUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 여행지는 수정할 수 없습니다.");
				} else {
					if (attractionDto.getAttractionUser() == null) {
						attractionDto.setAttractionUser(new UserDto());
					}

					attractionDto.setContentid(contentid);
					attractionDto.getAttractionUser().setUserNo(jwtService.getData(token, "userNo"));

					int rst = attractionService.updateAttraction(attractionDto);

					response.setState("SUCCESS");
					response.setMessage("여행지 수정 성공");
					response.setData(rst);
				}
			}

			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}

	@DeleteMapping(value = "/{contentid}")
	public ResponseEntity<?> deleteAttraction(@PathVariable("contentid") int contentid, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);

		try {
			AttractionDto attr = attractionService.attractionDetail(contentid);

			if (attr == null) {
				response.setState("FAIL");
				response.setMessage("삭제하고자 하는 여행지가 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");

				if (userNo != attr.getAttractionUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 여행지는 삭제할 수 없습니다.");
				} else {
					int rst = attractionService.deleteAttraction(contentid);

					response.setState("SUCCESS");
					response.setMessage("여행지 삭제 성공");
					response.setData(rst);
				}
			}

			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}

	@PostMapping(value = "/comment")
	public ResponseEntity<?> writeAttractionComment(@RequestBody AttractionCommentDto attractionCommentDto,
			HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);
		

		try {
			if (attractionCommentDto.getAttractionCommentUser() == null) {
				attractionCommentDto.setAttractionCommentUser(new UserDto());
			}

			attractionCommentDto.getAttractionCommentUser().setUserNo(jwtService.getData(token, "userNo"));
			
			int rst = attractionService.writeComment(attractionCommentDto);

			response.setState("SUCCESS");
			response.setMessage("댓글 작성 성공");
			response.setData(rst);

			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}

	@PutMapping("/comment/{commentNo}")
	public ResponseEntity<?> updateAttractionComment(@PathVariable("commentNo") int commentNo,
			@RequestBody AttractionCommentDto attractionCommentDto, HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);

		try {
			AttractionCommentDto comment = attractionService.getAttractionComment(commentNo);

			if (comment == null) {
				response.setState("FAIL");
				response.setMessage("해당 댓글이 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");

				if (userNo != comment.getAttractionCommentUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 댓글은 수정할 수 없습니다.");
				} else {
					if (attractionCommentDto.getAttractionCommentUser() == null) {
						attractionCommentDto.setAttractionCommentUser(new UserDto());
					}

					attractionCommentDto.setAttractionCommentNo(commentNo);
					attractionCommentDto.getAttractionCommentUser().setUserNo(jwtService.getData(token, "userNo"));

					int rst = attractionService.updateComment(attractionCommentDto);

					response.setState("SUCCESS");
					response.setMessage("댓글 수정 성공");
					response.setData(rst);
				}
			}

			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}

	@DeleteMapping("/comment/{commentNo}")
	public ResponseEntity<?> deleteAttractionComment(@PathVariable("commentNo") int commentNo,
			HttpServletRequest request) {
		ResponseDto<Integer> response = new ResponseDto<Integer>();
		String token = request.getHeader(TOKEN);

		try {
			AttractionCommentDto comment = attractionService.getAttractionComment(commentNo);

			if (comment == null) {
				response.setState("FAIL");
				response.setMessage("해당 댓글이 존재하지 않습니다.");
			} else {
				int userNo = jwtService.getData(token, "userNo");

				if (userNo != comment.getAttractionCommentUser().getUserNo()) {
					response.setState("FAIL");
					response.setMessage("다른 사람의 댓글은 삭제할 수 없습니다.");
				} else {
					int rst = attractionService.deleteComment(commentNo);

					response.setState("SUCCESS");
					response.setMessage("댓글 삭제 성공");
					response.setData(rst);
				}
			}

			return new ResponseEntity<ResponseDto<Integer>>(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setState("FAIL");
			response.setMessage("서버에 문제가 발생했습니다.");

			return ExceptionHandler.exceptionResponse(response, e);
		}
	}
}
