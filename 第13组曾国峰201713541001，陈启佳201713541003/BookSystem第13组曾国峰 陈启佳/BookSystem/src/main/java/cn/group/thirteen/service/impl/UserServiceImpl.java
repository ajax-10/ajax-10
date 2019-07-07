package cn.group.thirteen.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.group.thirteen.entity.UserEntity;
import cn.group.thirteen.mapper.QueryMaxIdMapper;
import cn.group.thirteen.mapper.UserMapper;
import cn.group.thirteen.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper um;
	@Autowired
	private QueryMaxIdMapper qui;
	
	public Integer insertStudent(UserEntity ue) {
		Integer stuId = qui.queryStudentMaxId();
		ue.setStuId(stuId);
		Integer low = um.insertStudent(ue);
		return low;
	}

	public List<UserEntity> queryStudentAll() {
		List<UserEntity> list = um.queryStudentAll();
		return list;
	}

	public UserEntity queryStudent(String stuName) {
		UserEntity u = um.queryStudent(stuName);
		return u;
	}

}
