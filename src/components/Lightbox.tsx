import { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

/**
 * Proof lightbox as a Radix Dialog. Focus moves in on open and returns to
 * the thumbnail that opened it on close, Escape closes it, arrow keys move
 * between images with wrapping. The caption is a figure note beside the
 * image on desktop and above it on phones, never a decorative caption
 * under the image.
 */
export type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Figure note in "What is shown: ... What happened: ..." form, or plain text. */
  note: string;
  /** Labelled figure note parts, preferred when available. */
  shown?: string;
  happened?: string;
  title?: string;
};

export default function Lightbox({
  open,
  onOpenChange,
  images,
  index,
  onIndexChange,
  label = "Proof image",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
  label?: string;
}) {
  const reducedMotion = useReducedMotion();
  const openerRef = useRef<Element | null>(null);
  const count = images.length;
  const safeIndex = count === 0 ? 0 : ((index % count) + count) % count;
  const image = images[safeIndex];

  const go = (delta: number) => {
    if (count === 0) return;
    onIndexChange(((safeIndex + delta) % count + count) % count);
  };

  if (count === 0 || !image) return null;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (next) openerRef.current = document.activeElement;
        onOpenChange(next);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-[70]"
          style={{ background: "rgba(23, 22, 20, 0.62)" }}
        />
        <MotionConfig reducedMotion="user">
          <Dialog.Content
            asChild
            onCloseAutoFocus={(e) => {
              e.preventDefault();
              const opener = openerRef.current;
              if (opener instanceof HTMLElement && document.contains(opener)) opener.focus();
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                go(-1);
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                go(1);
              }
            }}
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: "-50%", y: "calc(-50% + 8px)" }}
              animate={{ opacity: 1, x: "-50%", y: "-50%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-label={label}
              className="fixed left-1/2 top-1/2 z-[80] max-h-[90vh] w-[min(960px,92vw)] overflow-y-auto p-6 md:p-8"
              style={{
                background: "var(--paper, #F7F3EA)",
                border: "1px solid var(--line, #DCD5C6)",
                borderRadius: 2,
              }}
            >
              <Dialog.Title className="sr-only">{image.title ?? label}</Dialog.Title>
              <Dialog.Description className="sr-only">{image.note}</Dialog.Description>
              <div className="flex items-center justify-between gap-4">
                <p
                  style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                    fontWeight: 500,
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: "var(--muted, #6E6A61)",
                  }}
                >
                  {safeIndex + 1} of {count}
                </p>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    style={{
                      fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                      fontWeight: 500,
                      fontSize: "0.9375rem",
                      color: "var(--ink, #1C1A17)",
                      background: "var(--surface, #FFFEFA)",
                      border: "1px solid var(--line, #DCD5C6)",
                      borderRadius: 2,
                      minHeight: 44,
                      minWidth: 44,
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </Dialog.Close>
              </div>

              <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
                <div className="order-first md:order-2 md:w-[280px] md:shrink-0">
                  <p
                    style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                      fontWeight: 500,
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "var(--muted, #6E6A61)",
                    }}
                  >
                    {image.shown || image.happened ? (
                      <>
                        {image.shown && (
                          <>
                            <strong style={{ color: "var(--ink, #1C1A17)" }}>What is shown: </strong>
                            {image.shown}{" "}
                          </>
                        )}
                        {image.happened && (
                          <>
                            <strong style={{ color: "var(--ink, #1C1A17)" }}>What happened: </strong>
                            {image.happened}
                          </>
                        )}
                      </>
                    ) : (
                      image.note
                    )}
                  </p>
                </div>
                <div
                  className="order-2 md:order-1 md:min-w-0 md:flex-1"
                  style={{
                    border: "1px solid var(--line, #DCD5C6)",
                    borderRadius: 2,
                    background: "var(--surface, #FFFEFA)",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    style={{ display: "block", width: "100%", height: "auto", maxHeight: "68vh", objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="inline-flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                    fontWeight: 500,
                    fontSize: "0.9375rem",
                    color: "var(--ink, #1C1A17)",
                    background: "var(--surface, #FFFEFA)",
                    border: "1px solid var(--line, #DCD5C6)",
                    borderRadius: 2,
                    minHeight: 44,
                    padding: "8px 16px",
                    cursor: "pointer",
                  }}
                >
                  <ArrowLeft size={16} weight="regular" aria-hidden="true" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="inline-flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                    fontWeight: 500,
                    fontSize: "0.9375rem",
                    color: "var(--ink, #1C1A17)",
                    background: "var(--surface, #FFFEFA)",
                    border: "1px solid var(--line, #DCD5C6)",
                    borderRadius: 2,
                    minHeight: 44,
                    padding: "8px 16px",
                    cursor: "pointer",
                  }}
                >
                  Next
                  <ArrowRight size={16} weight="regular" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </Dialog.Content>
        </MotionConfig>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
