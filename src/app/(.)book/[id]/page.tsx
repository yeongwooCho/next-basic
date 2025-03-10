import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function InterceptBookPage(props: any) {
  return (
    <div>
      asdfasdfsdaf
      <Modal>
        <BookPage {...props} />
      </Modal>
    </div>
  );
}
