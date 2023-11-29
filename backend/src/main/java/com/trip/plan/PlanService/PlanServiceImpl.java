package com.trip.plan.PlanService;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.plan.mapper.PlanMapper;
import com.trip.plan.model.PlanDto;
import com.trip.plan.model.PlanPlaceDto;

@Service
@Transactional
public class PlanServiceImpl implements PlanService {

	private PlanMapper planMapper;

	public PlanServiceImpl(PlanMapper planMapper) {
		super();
		this.planMapper = planMapper;
	}

	@Override
	public List<PlanDto> planList(int userNo) {
		return planMapper.planList(userNo);
	}

	@Override
	public int planAdd(PlanDto planDto) {
		planMapper.planAdd(planDto);
		planMapper.planDetailAdd(planDto);
		return 1;
	}

	@Override
	public int planPlaceListAdd(List<PlanPlaceDto> planPlaceDto) {
		return planMapper.planPlaceListAdd(planPlaceDto);
	}

	@Override
	public int planDelete(int planNo) {
		return planMapper.planDelete(planNo);
	}

	@Override
	public int planModify(PlanDto planDto) {
		return planMapper.planModify(planDto);
	}

	@Override
	public PlanDto planDetail(int planNo) {
		return planMapper.planDetail(planNo);
	}

	@Override
	public int planDeleteDetail(int planNo, int contentId) {
		return planMapper.planDeleteDetail(planNo, contentId);
	}

}
