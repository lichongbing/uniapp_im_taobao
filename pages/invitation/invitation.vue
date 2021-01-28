<template>
    <view class="page">
        <view class="page-list" v-for="(item, index) in list" :key="index">
			<view class="page-face">
				<image :src="staticPhoto + item.face + '?_=' + imgRan"
				       :lazy-load="true"
				       :data-index="key"
				       @error="imageError" />
			</view>
			<view class="page-name">
				{{item.nickname}}
			</view>
        </view>
    </view>
</template>

<script>
	import _get from "../../common/_get";
	import _data from "../../common/_data";
	import _hook from "../../common/_hook";
	
	export default {
	    components: {
	        
	    },
	    data() {
	        return {
	            list: [],
				user_id:''
	        }
	    },
	    onShow() {
	        let _this = this;
			let send_data = { user_id:_this.user_id };
			_hook.routeSonHook();
	        _get.getInviteList(send_data, function (ret) {
				console.log( ret.data)
                _this.list = ret.data
            });
	    },
	    onLoad(option) {
			let _this = this;
			_this.user_id = option.user_id;
	    },
	    onHide() {
	        
	    },
	    computed: {
	        staticPhoto () {
	          return _data.staticPhoto();
	        },
			imgRan () {
			  return Math.random();
			},
	    },
	    methods: {
			staticPhoto () {
			  return _data.staticPhoto();
			},
	        goDetails (user_id) {
	          if (user_id) {
	            uni.navigateTo({
	              url: '../details/index?user_id=' + user_id,
	            });
	          }
	        },
	    },
	    watch: {},
	}
</script>

<style>
	.page{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		overflow: hidden;
	}
	.page-list{
		float: left;
		width: 167upx;
		margin: 10upx;
	}
	.page-list .page-face uni-image{
		width: 100%;
		height: 100%;
		border-radius: 100upx;
	}
	.page-list .page-face{
		width: 100upx;
		height: 100upx;
		margin: 0 auto;
	}
	.page-name{
		width: 100%;
		text-align: center;
		font-size: 28upx;
		color: #000000;
	}
</style>
