package com.trip.board.service;

import java.util.List;

import com.trip.board.model.BoardDto;
import com.trip.board.model.BoardCommentDto;

public interface BoardService {
	List<BoardDto> boardList();
	BoardDto boardDetail(int boardNo);
	BoardCommentDto getBoardComment(int commentNo);
	int write(BoardDto boardDto);
	int writeComment(BoardCommentDto commentDto);
	int updateBoard(BoardDto boardDto);
	int updateComment(BoardCommentDto commentDto);
	int deleteBoard(int boardNo);
	int deleteComment(int commentNo);
}
