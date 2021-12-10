const moment = require("moment");

const VN_OFFSET = "+07:00";
const MOMENT_DATE = {
  YYYY_MM_DD: "YYYY-MM-DD",
  DD_MM_YYYY: "DD-MM-YYYY",
  DEFAULT: "YYYY-MM-DD HH:mm:ss.SSS",
  YYYY_MM_DD_HH_MM_SS: "YYYY-MM-DD HH:mm:ss",
};

module.exports = {
  MOMENT_DATE,
  parse2Str,
  convert2Str,
}

function parse2Str(date = new Date(), format = MOMENT_DATE.DEFAULT, isUTC){
  if (isUTC) {
    return moment(date).utcOffset("+00:00").format(format);
  } else {
    return moment(date).utcOffset(VN_OFFSET).format(format);
  }
};

function convert2Str(date, inFormat, outFormat) {
  return moment(date, inFormat).utcOffset(VN_OFFSET).format(outFormat);
}