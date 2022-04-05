<template>
  <div class="comment-message-container">
    <!-- form表单区域 -->
    <div class="form-container">
      <form id="comment-form" action="" ref="form" @submit.prevent="handleSubmit">
        <div class="form-item">
          <!-- 信息输入 -->
          <div class="input-area">
            <input
              v-model="formData.nickname"
              type="text"
              maxlength="10"
              placeholder="请输入昵称"
            />
            <span class="lenTip">{{ formData.nickname.length }}/10</span>
          </div>
          <!-- 错误信息 -->
          <div class="errorInfo">{{ errorInfo.content }}</div>
        </div>
        <div class="form-item">
          <div class="text-area">
            <textarea
              v-model="formData.content"
              maxlength="300"
              placeholder="请输入内容"
              cols="30"
              rows="10"
            ></textarea>
            <span class="lenTip">{{ formData.content.length }}/300</span>
          </div>
          <div class="errorInfo">{{ errorInfo.content }}</div>
        </div>
        <div class="form-item">
          <div class="button-area">
            <button :disabled="isSubmiting">
              {{ isSubmiting ? "提交中..." : "提交" }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- list列表展示区域 -->
    <div class="list-container">
			<h3>
				<span class="title">{{ title }}</span>
				<span class="subTitle">（ {{ subTitle }} ）</span>
			</h3>
      <ul>
        <li v-for="(item, i) in list" :key="i">
					<Avatar :url="item.avatar" :size="44" class="avatar"/>
					<div class="aside">
						<span class="nickname">{{ item.nickname }}</span>
						<span class="createDate">{{ timestampToTime(item.createDate) }}</span>
						<div class="contnet">{{ item.content }}</div>
					</div>
				</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import { SERVERURL } from '@/urlConfig.js';
import { timestampToTime } from '@/utils/tools.js';
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		subTitle: {
			type: Number,
			default: 0,
		},
		list: {
			type: Array,
			default: () => [],
		},
		isListLoading: {
			type: Boolean,
			default: false,
		}
	},
  data() {
    return {
      formData: {
        nickname: "",
        content: ""
      },
      errorInfo: {
        nickname: "",
        content: ""
      },
      isSubmiting: false,       //是否正在提交
    };
  },
	components: {
		Avatar,
	},
	methods: {
		timestampToTime,
    //提交评论
    handleSubmit() {
      console.log(this.formData);
      this.errorInfo.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.errorInfo.content = this.formData.content ? "" : "请填写评论内容";
      if (this.errorInfo.nickname || this.errorInfo.content) {
        return;
      }
      this.isSubmiting = true;
      //将事件提交给父组件处理
      this.$emit('submit', this.formData, (successMsg) => {
        this.$showMessage({
          type: 'success',
          content: successMsg,
          container: this.$refs.form,
          duration: 1000,
          callback: () => {
            //回调，事件处理完成
            console.log('父组件处理事件完成');
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          }
        });
      });
    }
	}
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.comment-message-container {
	overflow: hidden;
  padding: 20px;
  .form-container {
    .form-item {
      margin-bottom: 10px;
      .input-area {
        width: 50%;
        position: relative;
      }
      .text-area {
        position: relative;
      }
      .lenTip {
        position: absolute;
        right: 8px;
        bottom: 1px;
        font-size: 12px;
        height: 40px;
        line-height: 40px;
        color: @gray;
      }
      input,
      textarea {
        width: 100%;
        border: 1px dashed @gray;
        box-sizing: border-box;
        outline: none;
        color: @words;
        font-size: 14px;
        border-radius: 7px;
        resize: none;
        &:focus {
          border-color: @primary;
        }
      }
      input {
        height: 40px;
        padding: 0 15px;
      }
      textarea {
        height: 120px;
        padding: 8px 15px;
        box-sizing: border-box;
      }
      .errorInfo {
        height: 20px;
        line-height: 20px;
        margin-top: 6px;
        font-size: 14px;
        color: @danger;
      }

      .button-area {
        button {
          position: relative;
          width: 100px;
          height: 34px;
          background-color: @primary;
          color: #fff;
          border: none;
          cursor: pointer;
          outline: none;
          border-radius: 5px;
          &:hover {
            background: darken(@primary, 10%);
          }
          &:disabled {
            background: lighten(@primary, 20%);
            cursor: not-allowed;
          }
        }
      }
    }
  }

  .list-container {
    margin-top: 50px;
		margin-bottom: 200px;
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			li {
				position: relative;
				display: flex;
				height: 70px;
				margin-top: 20px;
				// line-height: 70px;
				border-bottom: 1px solid lighten(@gray, 20%);
        .avatar {
          border: 1px solid rgba(0, 0, 0, 0.5);
        }
				.aside {
					margin-left: 10px;
          width: 90%;
					height: 44px;
					// line-height: 44px;
					.nickname {
						color: darken(@success, 10%);
					}
					.createDate {
						position: absolute;
						right: 5px;
						top: 0px;
						color: @gray;
						font-size: 14px;
					}
					.contnet {
						margin-top: 10px;
						font-size: 14px;
					}
				}
			}
		}
		
  }
}
</style>
