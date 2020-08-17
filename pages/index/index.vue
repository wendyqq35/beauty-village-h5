<template>
	<view>
		<open-government ref='open-government' v-if="PageCur==='open-government'"></open-government>
		<live-service ref='live-service' v-if="PageCur==='live-service'"></live-service>
		<tourist-resources ref='tourist-resources' v-if="PageCur==='tourist-resources'"></tourist-resources>
		<my ref='my' v-if="PageCur==='my'"></my>
		<view style="height: 50px;"></view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="open-government">
				<view class='cuIcon-cu-image'>
					<text class="cuIcon-homefill" :class="PageCur=='open-government'?'text-blue':'text-gray'"></text>
				</view>
				<view :class="PageCur=='open-government'?'text-blue':'text-gray'">政务公开</view>
			</view>
			<view class="action" @click="NavChange" data-cur="live-service">
				<view class='cuIcon-cu-image'>
					<text class="cuIcon-evaluate" :class="PageCur=='live-service'?'text-blue':'text-gray'"></text>
				</view>
				<view :class="PageCur=='live-service'?'text-blue':'text-gray'">民生服务</view>
			</view>
			<view class="action" @click="NavChange" data-cur="tourist-resources">
				<view class='cuIcon-cu-image'>
					<text class="cuIcon-camera" :class="PageCur=='tourist-resources'?'text-blue':'text-gray'"></text>
				</view>
				<view :class="PageCur=='tourist-resources'?'text-blue':'text-gray'">旅游资源</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<text class="cuIcon-my" :class="PageCur=='my'?'text-blue':'text-gray'"></text>
				</view>
				<view :class="PageCur=='my'?'text-blue':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import liveService from "../liveService/liveService";
	import openGovernment from "../openGovernment/openGovernment";
	import touristResources from "../touristResources/touristResources";
	import my from "../my/my";

	export default {
		components: {
			liveService,
			openGovernment,
			touristResources,
			my
		},
		data() {
			return {
				PageCur: 'open-government'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style lang="scss">

</style>
