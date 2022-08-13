import React from "react";

function AboutUs({ t }) {
  return (
    <div className="relative flex justify-center px-8 xl:px-0 py-[70px] xl:pt-[120px] xl:pb-[225px]">
      <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px] z-10">
        <div className="flex items-center gap-[16px] -ml-[136px]">
          <div className="h-[2px] w-[120px] bg-main"></div>
          <h2 className="text-[24px] xl:text-[36px] font-semibold">
            {t("common:aboutTtl")}
          </h2>
        </div>

        <h2 className="text-[24px] xl:text-[36px] py-[19px]">
          SURAJA <span className="text-subTwo">LAW OFFICES</span>
        </h2>
        <div className="flex flex-col items-start sm:items-center">
          <h2 className="text-[22px] font-semibold xl:text-[36px]">
            {t("common:aboutTag")}
          </h2>
          <p className="text-[16px] xl:text-[18px] pt-[26px] text-justify">
            {t("common:aboutDesc")}
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-center">
          <h2 className="text-[22px] xl:text-[36px] py-[26px] font-semibold">
            {t("about:misiVisi")}
          </h2>
          <p className="text-[16px] xl:text-[18px] text-justify">
            {t("about:mvDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
