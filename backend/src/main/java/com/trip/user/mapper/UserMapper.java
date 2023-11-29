package com.trip.user.mapper;

import java.sql.SQLException;
import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

import com.trip.user.model.UserDto;

@Mapper
public interface UserMapper {
	int refresh(String refreshToken) throws SQLException;
	UserDto login(UserDto user) throws SQLException;
	int saveRefreshToken(HashMap<String, String> map) throws SQLException;
	int signup(UserDto user) throws SQLException;
	String check(String userId) throws SQLException;
	UserDto info(int userNo) throws SQLException;
	UserDto findPw(UserDto user) throws SQLException;
	int modify(UserDto user) throws SQLException;
	int delete(int userNo) throws SQLException;
}