const DEFAULT_PLAYER1_NAME = "A";
const DEFAULT_PLAYER2_NAME = "B";
const DEFAULT_TOTAL_ROUND = 10;
const HAP_CORRENT_POINT = 1;
const KYEOL_CORRENT_POINT = 3;
const WRONG_ANSWER_POINT = -1;

const SECOND = 1000;
const DEFAULT_TIME_LIMIT = SECOND * 10;
const DEFAULT_KYEOL_TIME_LIMIT = SECOND * 5;
const MAX_TIMEOUT_TURN_PER_ROUND = 6; // 라운드별 합 시간초과 최대 턴(양 플레이어가 합을 제시하지 않고 일정 횟수 이상 시간초과한 경우, 라운드 종료)

export default {
  DEFAULT_PLAYER1_NAME,
  DEFAULT_PLAYER2_NAME,
  DEFAULT_TOTAL_ROUND,
  HAP_CORRENT_POINT,
  KYEOL_CORRENT_POINT,
  WRONG_ANSWER_POINT,
  DEFAULT_TIME_LIMIT,
  DEFAULT_KYEOL_TIME_LIMIT,
  MAX_TIMEOUT_TURN_PER_ROUND,
};
