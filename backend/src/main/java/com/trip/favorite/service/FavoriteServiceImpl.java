package com.trip.favorite.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.favorite.mapper.FavoriteMapper;
import com.trip.favorite.model.FavoriteDto;

@Service
@Transactional
public class FavoriteServiceImpl implements FavoriteService {
	private FavoriteMapper favoriteMapper;
	
	public FavoriteServiceImpl(FavoriteMapper favoriteMapper) {
		super();
		this.favoriteMapper = favoriteMapper;
	}

	@Override
	public List<FavoriteDto> myFavoriteList(int userNo) {
		return favoriteMapper.myFavoriteList(userNo);
	}

	@Override
	public List<FavoriteDto> likeUserList(int contentid) {
		return favoriteMapper.likeUserList(contentid);
	}

	@Override
	public int makeLike(FavoriteDto favoriteDto) {
		return favoriteMapper.makeLike(favoriteDto);
	}

	@Override
	public int deleteLike(HashMap<String, String> map) {
		return favoriteMapper.deleteLike(map);
	}
}
