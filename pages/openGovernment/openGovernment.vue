<template>
	<view>
		<cu-custom bgColor="bg-white">
			<block slot="content">首页</block>
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
		<view class="cu-list grid col-4">
			<view class="cu-item" v-for="(item,index) in funList" :key="index">
				<view class="round bg text-white" :class="'bg-'+item.color">
					<view :class="'cuIcon-'+item.ico"></view>
				</view>
				<view class="">{{item.name}}</view>
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar bg-white round lg cuIcon-notificationfill text-blue"></view>
				<view class="content">
					<view class="text-grey">药店十倍价格卖口罩，被处罚</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="text-red  margin-right-xs"></text>
							谨记口诀，轻松防范新冠肺炎
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs cuIcon-right"></view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-top">
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="text-xl text-bold text-black">良村随手拍</text>
				</view>
				<view class="action">
					<view>更多<text class="cuIcon-right"></text></view>
				</view>
			</view>
			<view class="cu-list grid col-2">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
					<view class="padding-lr-sm">
						<image :src="item.url" mode="aspectFill"></image>
						<text class="text-black">{{item.name}}</text>
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
				funList:[{
					ico:'evaluate_fill',
					name:'良村风采',
					color:'blue'
				},{
					ico:'phone',
					name:'良村热线',
					color:'red'
				},{
					ico:'favorfill',
					name:'良村动态',
					color:'green'
				},{
					ico:'expressman',
					name:'良村党建',
					color:'orange'
				},],
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
				cuIconList: [{
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					name: '夏日避暑之最'
				}, {
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					name: '秋天正在逼近'
				}, {
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					name: '老古镇'
				}, {
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					name: '仙境区'
				}],
			};
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
		}
	}
</script>

<style lang="scss">
	.bg {
		width: 48%;
		height: 47px;
		margin-left: 26%;
	}
</style>
