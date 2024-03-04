import { updateProduct2 } from "@/app/lib/actions";
import { fetchProduct2 } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product2 = await fetchProduct2(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product2.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct2} className={styles.form}>
          <input type="hidden" name="id" value={product2.id} />
          <label>เลขทะเบียน</label>
          <input type="text" name="title" placeholder={product2.title} />
          <label>ผู้รับ</label>
          <input type="text" name="desc2" placeholder={product2.desc2} />
          <label>หน่วยงาน</label>
          <input type="text" name="desc3" placeholder={product2.desc3} />
          <label>รายลเอียด</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product2.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;