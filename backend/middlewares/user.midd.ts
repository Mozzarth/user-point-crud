import { validRouter } from './express-validator.midd'
import { body, param } from 'express-validator'

export function userCreate() {
    return [
        body("name", "name is required and min lenght is 2")
            .exists()
            .isString()
            .isLength({ min: 2 }),
        body("email", "email is required and min lenght is 5")
            .exists()
            .isString()
            .isLength({ min: 5 }),
        body("password", "password is required and min lenght is 2")
            .exists()
            .isString()
            .isLength({ min: 8 }),
        validRouter
    ]
}

export function userDelete() {
    return [
        param("id", "id is uuid")
            .exists()
            .isUUID(),
        validRouter
    ]
}
export function userById() {
    return [
        param("id", "id is uuid")
            .exists()
            .isUUID(),
        validRouter
    ]
}



export function userUpdate() {
    return [
        param("id", "id is uuid"),
        body("name", "name is required and min lenght is 2")
            .optional()
            .isString()
            .isLength({ min: 2 }),
        body("email", "email is required and min lenght is 5")
            .optional()
            .isString()
            .isLength({ min: 5 }),
        body("password", "password is required and min lenght is 2")
            .optional()
            .isString()
            .isLength({ min: 8 }),
        validRouter
    ]
}