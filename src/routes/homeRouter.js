import { Router } from "express";
import { showRecommendedCocktail } from "../controllers/homeController.js";

const homeRouter = Router();

/**
 *  @swagger
 *  tags:
 *    name: Home
 *    description: Home MVP
 */
/**
 * @swagger
 * /:
 *   get:
 *    summary: 메인 홈 화면(칵테일 조회) API
 *    description: 홈 화면에서 오늘의 술 추천 서비스를 조회할 때 사용하는 API입니다.
 *    tags: [Home]
 *    responses:
 *      200:
 *        description: 메인 홈 화면(오늘의 술 추천) 조회
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: number
 *                  example: 200
 *                message:
 *                  type: string
 *                  example: 메인 홈 화면 조회에 성공하였습니다.
 *                data:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: number
 *                      description: 칵테일 아이디
 *                      example: 1 
 *                    cocktail:
 *                      type: string
 *                      description: 칵테일 이름
 *                      example: 블랙 러시안
 *                    image:
 *                      type: string
 *                      description: 칵테일 이미지 url
 *                      example: https://rabbitpull.kr.objectstorage.ncloud.com/users/1659007051208
 */
homeRouter.get("/", showRecommendedCocktail);

export { homeRouter };