//引数は東経を正 北緯を正とする
//形式: gpsDistance(引数1の経度, 引数1の緯度, 引数2の経度, 引数2の緯度)
//gpsDistance(139.013057, 36.322356, 139.073177, 36.383191);
// -> 8413.776423049037
//返り値の単位はm
function gpsDistance(aLat, aLon, bLat, bLon){
	// rad形式
	var aLatRad = aLat * Math.PI / 180;
	var aLonRad = aLon * Math.PI / 180;
	var bLatRad = bLat * Math.PI / 180;
	var bLonRad = bLon * Math.PI / 180;
	var latAve = Math.abs(aLatRad + bLatRad) / 2;
	var dLat = Math.abs(aLatRad - bLatRad);
	var dLon = Math.abs(aLonRad - bLonRad);
	var sinLat = Math.sin(latAve);
	var tmp = 1.0 - 0.00667478 * (sinLat*sinLat);
	var meridianRad = 6334834.0 / Math.sqrt(tmp*tmp*tmp);
	var dvrad = 6377397.155 / Math.sqrt(tmp);
	var t1 = meridianRad * dLat;
	var t2 = dvrad * Math.cos(latAve) * dLon;
	var dist = Math.sqrt((t1*t1) + (t2*t2));
	return dist;
}
