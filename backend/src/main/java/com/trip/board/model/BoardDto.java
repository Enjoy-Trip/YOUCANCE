package com.trip.board.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.trip.user.model.UserDto;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class BoardDto {
	private int boardNo;
	private String boardTitle;
	private String boardTime;
	private String boardContent;
	private UserDto boardUser;
	private List<String> boardImages;
	private boolean boardLoginCheck;
	private List<BoardCommentDto> boardCommentList;

	public boolean isBoardLoginCheck() {
		return boardLoginCheck;
	}

	public void setBoardLoginCheck(boolean boardLoginCheck) {
		this.boardLoginCheck = boardLoginCheck;
	}

	public int getBoardNo() {
		return boardNo;
	}

	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}

	public String getBoardTitle() {
		return boardTitle;
	}

	public void setBoardTitle(String boardTitle) {
		this.boardTitle = boardTitle;
	}

	public String getBoardTime() {
		return boardTime;
	}

	public void setBoardTime(String boardTime) {
		this.boardTime = boardTime;
	}

	public String getBoardContent() {
		return boardContent;
	}

	public void setBoardContent(String boardContent) {
		this.boardContent = boardContent;
	}

	public List<String> getBoardImages() {
		return boardImages;
	}

	public void setBoardImages(List<String> boardImages) {
		this.boardImages = boardImages;
	}

	public UserDto getBoardUser() {
		return boardUser;
	}

	public void setBoardUser(UserDto boardUser) {
		this.boardUser = boardUser;
	}

	public List<BoardCommentDto> getboardCommentList() {
		return boardCommentList;
	}

	public void setboardCommentList(List<BoardCommentDto> boardCommentList) {
		this.boardCommentList = boardCommentList;
	}

}
