package com.trip.attraction.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.trip.user.model.UserDto;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AttractionCommentDto {
	private int attractionCommentNo;
	private int contentid;
	private String attractionCommentContent;
	private String attractionCommentTime;
	private UserDto attractionCommentUser;
	private boolean attractionCommentLoginCheck;

	public boolean isAttractionCommentLoginCheck() {
		return attractionCommentLoginCheck;
	}

	public void setAttractionCommentLoginCheck(boolean attractionCommentLoginCheck) {
		this.attractionCommentLoginCheck = attractionCommentLoginCheck;
	}

	public int getAttractionCommentNo() {
		return attractionCommentNo;
	}

	public void setAttractionCommentNo(int attractionCommentNo) {
		this.attractionCommentNo = attractionCommentNo;
	}

	public int getContentid() {
		return contentid;
	}

	public void setContentid(int contentid) {
		this.contentid = contentid;
	}

	public String getAttractionCommentContent() {
		return attractionCommentContent;
	}

	public void setAttractionCommentContent(String attractionCommentContent) {
		this.attractionCommentContent = attractionCommentContent;
	}

	public String getAttractionCommentTime() {
		return attractionCommentTime;
	}

	public void setAttractionCommentTime(String attractionCommentTime) {
		this.attractionCommentTime = attractionCommentTime;
	}

	public UserDto getAttractionCommentUser() {
		return attractionCommentUser;
	}

	public void setAttractionCommentUser(UserDto attractionCommentUser) {
		this.attractionCommentUser = attractionCommentUser;
	}

	@Override
	public String toString() {
		return "AttractionCommentDto [attractionCommentNo=" + attractionCommentNo + ", contentid=" + contentid
				+ ", attractionCommentContent=" + attractionCommentContent + ", attractionCommentTime="
				+ attractionCommentTime + ", attractionCommentUser=" + attractionCommentUser + "]";
	}
}
