package com.trip.user.service;

import java.sql.SQLException;
import java.util.HashMap;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.user.mapper.UserMapper;
import com.trip.user.model.UserDto;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	private UserMapper userMapper;

	public UserServiceImpl(UserMapper userMapper) {
		super();
		this.userMapper = userMapper;
	}

	@Override
	public int refresh(String refreshToken) throws SQLException {
		return userMapper.refresh(refreshToken);
	}

	@Override
	public UserDto login(UserDto user) throws SQLException {
		return userMapper.login(user);
	}

	@Override
	public int saveRefreshToken(int userNo, String refreshToken) throws SQLException {
		HashMap<String, String> map = new HashMap<String, String>();

		map.put("userNo", "" + userNo);
		map.put("refreshToken", refreshToken);

		return userMapper.saveRefreshToken(map);
	}

	@Override
	public int signup(UserDto user) throws SQLException {
		return userMapper.signup(user);
	}

	@Override
	public String check(String userId) throws SQLException {
		return userMapper.check(userId);
	}

	@Override
	public UserDto info(int userNo) throws SQLException {
		return userMapper.info(userNo);
	}

	@Override
	public int modify(UserDto user) throws SQLException {
		return userMapper.modify(user);
	}

	@Override
	public int delete(int userNo) throws SQLException {
		return userMapper.delete(userNo);
	}

	@Override
	public UserDto findPw(UserDto user) throws SQLException {
		return userMapper.findPw(user);
	}

}
