package com.trip.board.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.board.mapper.BoardMapper;
import com.trip.board.model.BoardDto;
import com.trip.board.model.BoardCommentDto;

@Service
@Transactional
public class BoardServiceImpl implements BoardService {
	private BoardMapper boardMapper;

	public BoardServiceImpl(BoardMapper boardMapper) {
		super();
		this.boardMapper = boardMapper;
	}

	@Override
	public List<BoardDto> boardList() {
		return boardMapper.boardList();
	}

	@Override
	public BoardDto boardDetail(int boardNo) {
		return boardMapper.boardDetail(boardNo);
	}

	@Override
	public int write(BoardDto boardDto) {
		boardMapper.write(boardDto);
		
		if (boardDto.getBoardContent() != null) {			
			boardMapper.writeDetail(boardDto);
		}
		
		if (boardDto.getBoardImages() != null) {			
			boardMapper.writeImages(boardDto);
		}

		return 1;
	}

	@Override
	public int writeComment(BoardCommentDto commentDto) {
		return boardMapper.writeComment(commentDto);
	}

	@Override
	public int updateBoard(BoardDto boardDto) {
		return boardMapper.updateBoard(boardDto);
	}

	@Override
	public int updateComment(BoardCommentDto commentDto) {
		return boardMapper.updateComment(commentDto);
	}

	@Override
	public int deleteBoard(int boardNo) {
		return boardMapper.deleteBoard(boardNo);
	}

	@Override
	public int deleteComment(int commentNo) {
		return boardMapper.deleteComment(commentNo);
	}

	@Override
	public BoardCommentDto getBoardComment(int commentNo) {
		return boardMapper.getComment(commentNo);
	}
}
