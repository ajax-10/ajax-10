package cn.group.thirteen.service;

import java.util.List;

import cn.group.thirteen.entity.UserEntity;

public interface UserService {
	Integer insertStudent(UserEntity ue);
	List<UserEntity> queryStudentAll();
	UserEntity queryStudent(String stuName);
}
