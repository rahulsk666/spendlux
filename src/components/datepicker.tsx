"use client";
import React from "react";
import { ConfigProvider, DatePicker, Space, Typography } from "antd";
import type { DatePickerProps } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(buddhistEra);

const { Title } = Typography;

// Component level locale
const buddhistLocale: typeof en = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "BBBB-MM-DD",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  },
};

// ConfigProvider level locale
const globalBuddhistLocale: typeof enUS = {
  ...enUS,
  DatePicker: {
    ...enUS.DatePicker!,
    lang: buddhistLocale.lang,
  },
};

const defaultValue = dayjs("2024-01-01");

const DatePickerComponent: React.FC = () => {
  const onChange: DatePickerProps["onChange"] = (_, dateStr) => {
    console.log("onChange:", dateStr);
  };

  return (
    <Space direction="vertical">
      <Title level={4}>By locale props</Title>
      <DatePicker
        className=""
        defaultValue={defaultValue}
        showTime
        locale={buddhistLocale}
        onChange={onChange}
      />
    </Space>
  );
};

export default DatePickerComponent;
