import { SANPHAM } from "../../constants/index"

export const productActionAdd = (data) => {
    return {
        type: SANPHAM.SANPHAM_ADD,
        payload: data
    }
}