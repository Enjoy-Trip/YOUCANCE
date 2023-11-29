package com.trip.attraction.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.attraction.mapper.AttractionMapper;
import com.trip.attraction.model.AttractionCommentDto;
import com.trip.attraction.model.AttractionDto;

@Service
@Transactional
public class AttractionServiceImpl implements AttractionService {
	private AttractionMapper attractionMapper;
	
	public AttractionServiceImpl(AttractionMapper attractionMapper) {
		super();
		this.attractionMapper = attractionMapper;
	}

	@Override
	public List<AttractionDto> attractionList(HashMap<String, String> map) {
		return attractionMapper.attractionList(map);
	}

	@Override
	public AttractionDto attractionDetail(int contentid) {
		return attractionMapper.attractionDetail(contentid);
	}

	@Override
	public Integer createAttraction(AttractionDto attractionDto) {
		attractionMapper.createAttraction(attractionDto);
		
		if (attractionDto.getHomepage() != null || attractionDto.getOverview() != null || attractionDto.getTelname() != null) {
			attractionMapper.createAttractionDescription(attractionDto);
		}
		
		if (attractionDto.getCat1() != null || attractionDto.getCat2() != null|| attractionDto.getCat3() != null || attractionDto.getBooktour() != null) {
			attractionMapper.createAttractionDetailInfo(attractionDto);
		}
		
		return 1;
	}

	@Override
	public Integer updateAttraction(AttractionDto attractiontDto) {
		return attractionMapper.updateAttraction(attractiontDto);
	}
	
	@Override
	public Integer deleteAttraction(int contentid) {
		return attractionMapper.deleteAttraction(contentid);
	}

	@Override
	public Integer writeComment(AttractionCommentDto attractionCommentDto) {
		return attractionMapper.writeComment(attractionCommentDto);
	}

	@Override
	public Integer updateComment(AttractionCommentDto attractionCommentDto) {
		return attractionMapper.updateComment(attractionCommentDto);
	}

	@Override
	public int deleteComment(int commentNo) {
		return attractionMapper.deleteComment(commentNo);
	}

	@Override
	public AttractionCommentDto getAttractionComment(int commentNo) {
		return attractionMapper.getAttractionComment(commentNo);
	}

	@Override
	public List<AttractionCommentDto> attractionCommentList(int contentid) {
		return attractionMapper.attractionCommentList(contentid);
	}
}
