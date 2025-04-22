package {
	public function sleep(timeout:Number):* {
		return new Promise(function(resolve:Function):void {
			setTimeout(resolve, timeout);
		});
	}
}