import {Link} from "./Link";

/**
 * 服务器信息
 * Created by Bob Jiang on 2016/9/28.
 */
export class ServerInfo {
	public id: number;
	public type: number;
	public idc: number;
	public ip: string;
	public port: number;

	public link: Link;

	/**
	 * 清理和释放自己的资源
	 */
	public dispose(): void {
		if (!!this.link) {
			this.link.close(true);
			this.link = null;
		}
	}
}