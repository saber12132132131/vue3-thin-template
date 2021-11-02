/*
 * @Author: your name
 * @Date: 2021-11-01 13:37:49
 * @LastEditTime: 2021-11-02 15:52:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-thin-template\src\utils\dateUtil.ts
 */
/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import moment from 'moment'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
const DATE_FORMAT = 'YYYY-MM-DD '

export function formatToDateTime(
  date: moment.MomentInput = undefined,
  format = DATE_TIME_FORMAT,
): string {
  return moment(date).format(format)
}

export function formatToDate(date: moment.MomentInput = undefined, format = DATE_FORMAT): string {
  return moment(date).format(format)
}

export const dateUtil = moment
