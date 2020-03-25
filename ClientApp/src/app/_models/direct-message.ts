import { OnlineUser } from "../_models/online-user";

export class DirectMessage {
    public fromOnlineUser: OnlineUser | null = {connectionId: '', userName: ''};
    public message = '';
}