import Image from "next/image";
import Style from "../style/companies.module.css";
function Page() {
  return (
    <div className={Style.big_div}>
      <div className={Style.heading_div}>
        <h1 className={Style.heading}>
          Empower Your Business with Tailored Software Solutions <br /> 400+
          Happy Users Globally
        </h1>
      </div>

      <div className={Style.image_container}>
        <Image src="/company/1.png" alt="Image 1" width={200} height={200} />
        <Image src="/company/2.png" alt="Image 2" width={200} height={200} />
        <Image src="/company/3.png" alt="Image 3" width={200} height={200} />
        <Image src="/company/4.png" alt="Image 4" width={200} height={200} />
        <Image src="/company/5.png" alt="Image 20" width={200} height={200} />
      </div>
    </div>
  );
}

export default Page;
