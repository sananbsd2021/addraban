import { updatePalad } from "@/app/lib/actions";
import { fetchPalad } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SinglePaladPage = async ({ params }) => {
  const { id } = params;
  const palad = await fetchPalad(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {palad.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updatePalad} className={styles.form}>
          <input type="hidden" name="id" value={palad.id} />
          <label>เลขทะเบียน</label>
          <input type="text" name="title" placeholder={palad.title} />
          <label>ผู้รับ</label>
          <input type="text" name="desc2" placeholder={palad.desc2} />
          <label>หน่วยงาน</label>
          <input type="text" name="desc3" placeholder={palad.desc3} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePaladPage;

