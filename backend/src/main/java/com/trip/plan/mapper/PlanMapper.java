package com.trip.plan.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.trip.plan.model.PlanDto;
import com.trip.plan.model.PlanPlaceDto;

@Mapper
public interface PlanMapper {
	//리스트 전체 뿌려주기
	List<PlanDto> planList(int userNo);
	
	//계획 추가
	int planAdd(PlanDto planDto);
	int planDetailAdd(PlanDto planDto);
	int planPlaceListAdd(List<PlanPlaceDto> planPlaceDto);
	
	//계획 삭제
	int planDelete(int planNo);
	
	//계획 수정
	int planModify(PlanDto planDto);

	//리스트 눌렀을때 detail 뿌리기
	PlanDto planDetail(int planNo);
	
	//세부 계획 삭제. 
	int planDeleteDetail(int planNo, int contentId);

}
