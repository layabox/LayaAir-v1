import {IDisposable} from "../common/IDisposable";
import {ServerInfo} from "./ServerInfo";
/**
 * Created by Bob Jiang on 2016/10/9.
 */
export interface ILaya8Client extends IDisposable {
	open(configUrl: string, serverId: number, callback: (err: Error, serverInfo?: ServerInfo) => void): void;

	close(): void;

	// getIsConnected(id): boolean;

	send(message: Object): void;

	on(event: string, callback: (data: Object) => void): void;
	once(event: string, callback: (url: string, params: Object)=>void): void;
	off(event: string, callback: (url: string, params: Object) => void): void;

	request(request: string, response: string, params: any, matches: any, callback: (err: Error, result?: any) => void, timeout: number): void;
	request(request: string, response: string, params: any, matches: any, callback: (err: Error, result?: any) => void): void;

	notify(request: string, params: any): void;
}