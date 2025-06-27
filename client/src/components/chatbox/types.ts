import type {DateTime} from "luxon";

export type Message = {
    id: string
    from: string
    content: string
    state: string
    sendTime: DateTime
    receiveTime: DateTime
}

export type User = {
    id: string
    name: string
    avatar: string
}