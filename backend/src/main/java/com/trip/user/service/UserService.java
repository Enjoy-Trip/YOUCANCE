package com.trip.user.service;

import java.sql.SQLException;

import com.trip.user.model.UserDto;

public interface UserService {
	int refresh(String refreshToken) throws SQLException;

	UserDto login(UserDto user) throws SQLException;

	int saveRefreshToken(int userNo, String refreshToken) throws SQLException;

	int signup(UserDto user) throws SQLException;

	String check(String userId) throws SQLException;

	UserDto info(int userNo) throws SQLException;

	UserDto findPw(UserDto user) throws SQLException;

	int modify(UserDto user) throws SQLException;

	int delete(int userNo) throws SQLException;
}
