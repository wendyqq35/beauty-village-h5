<template>
	<view>
		<cu-custom bgColor="bg-white">
			<block slot="content">民生服务</block>
		</cu-custom>
		<view class="bg-white">
			<swiper class="screen-swiper padding" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item style="border-radius:10px" v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
		</view>
		<view class="bg-white">
			<view>便民服务</view>
			<view class="cu-list grid col-3">
				<view class="cu-item" v-for="(item,index) in funList" :key="index">
					<view class="bg text-white padding-tb-sm padding-lr margin-lr" style="border-radius: 10px;" :class="'bg-'+item.color">
						<view class="text-left">{{item.name}}</view>
						<view class="text-right" :class="'cuIcon-'+item.ico"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
				}],
				dotStyle: false,
				cardCur: 0,
				funList:[{
					ico:'send',
					name:'办事预约',
					color:'blue'
				},{
					ico:'edit',
					name:'办事指南',
					color:'orange'
				},{
					ico:'copy',
					name:'工作动态',
					color:'green'
				},],
			};
		}
	}
</script>

<style lang="scss">

</style>
