'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	let db = uniCloud.database();
	let callection = db.collection('list')
	// get获取表里面所有的数据
	let res = await callection.get() // 返回值是promise实例
	// console.log(res)

	// 获取单条数据
	// let res = await callection.doc('5f4666913c78880001a3256e').get()

	// 添加数据
	// let res = await callection.add({
	// 	name: '小工',
	// 	age: '100'
	// })

	// 删除数据
	// let res = await callection.doc('5f4667a2b804650001e71fe2').remove()

	// 更新数据 (有更新，没有就不更新)
	// let res = await callection.doc('5f4666913c78880001a32574').update({
	// 	name: '木工'
	// })
	// set若没有这个数据的时候就新增一条

	console.log(res)

	//返回数据给客户端
	return {
		data: res.data
	}
};
