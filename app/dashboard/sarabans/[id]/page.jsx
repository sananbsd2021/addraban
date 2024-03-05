import { updateSaraban } from "@/app/lib/actions";
import { fetchSaraban } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const saraban = await fetchSaraban(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {saraban.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateSaraban} className={styles.form}>
          <input type="hidden" name="id" value={saraban.id} />
          <label>เลขทะเบียน</label>
          <input type="text" name="title" placeholder={saraban.title} />
          <label>รายลเอียด</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={saraban.desc}
          ></textarea>
          <label>หน่วยงาน</label>
          <input type="text" name="desc2" placeholder={saraban.desc2} />
          <label>ปี พ.ศ.</label>
          <input type="text" name="year" placeholder={saraban.year} />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
