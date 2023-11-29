package com.trip.user.model;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDto {
	private int userNo;
	private String userId;
	private String userPassword;
	private String userName;
	private String userProfile;
	private String userNickname;
	private boolean userLoginCheck;
	
	public boolean isUserLoginCheck() {
		return userLoginCheck;
	}

	public void setUserLoginCheck(boolean userLoginCheck) {
		this.userLoginCheck = userLoginCheck;
	}

	public String getUserNickname() {
		return userNickname;
	}

	public void setUserNickname(String userNickname) {
		this.userNickname = userNickname;
	}

	public int getUserNo() {
		return userNo;
	}

	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getUserProfile() {
		return userProfile;
	}

	public void setUserProfile(String userProfile) {
		this.userProfile = userProfile;
	}

	@Override
	public String toString() {
		return "UserDto [userNo=" + userNo + ", userId=" + userId + ", userPassword=" + userPassword + ", userName="
				+ userName + ", userProfile=" + userProfile + ", userNickname=" + userNickname + "]";
	}
}
