var nowTemp = new Date();
var nowDay = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0).valueOf();
var nowMoth = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), 1, 0, 0, 0, 0).valueOf();
var nowYear = new Date(nowTemp.getFullYear(), 0, 1, 0, 0, 0, 0).valueOf();
适用于限定日期选择器的日期选择
        const disabledDate = function (current) {
            var nowTemp = new Date();
            var nowDay = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0).valueOf();
            return current &&(nowDay > current.getTime()) ;
        };
        <RangePicker
            disabledDate={disabledDate}
            style={{width:200}}
            {...getFieldProps('planTime', {getValueFromEvent: (value, timeString) => timeString})}
        />
不能选择今天以前的日期
