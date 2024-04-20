import Image from "next/image";
import { mock } from "node:test";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/96b8c578-b34a-488c-8bd6-898f28cb7f3a-cqytze.jpg",
    "https://utfs.io/f/6d204c04-cb36-4f45-8fce-a5dedde96f0a-ootsd5.jpg",
    "https://utfs.io/f/bc717da4-efd5-4cbc-af0a-ef92504db916-ybwubn.jpg",
    "https://utfs.io/f/51515b86-e548-4028-bad8-0c88cc6fa36d-1ipo2w.jpg",
  ];

  const mockImages = mockUrls.map((url, ind) => ({ id: ind + 1, url }));

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt="mock"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
