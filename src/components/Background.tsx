export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -top-[260px] left-1/2 h-[1000px] w-[1300px] -translate-x-1/2 bg-[radial-gradient(ellipse_50%_45%_at_50%_40%,rgba(74,70,200,.55)_0%,rgba(46,40,150,.28)_40%,rgba(15,16,54,0)_75%)]" />
      <div className="bg-rays absolute left-1/2 top-0 h-[640px] w-[760px] -translate-x-1/2" />
      <div className="mask-fade-down-52 absolute left-1/2 top-[155px] size-[1060px] -translate-x-1/2 rounded-full border-[1.5px] border-[rgba(110,110,240,.22)]" />
      <div className="mask-fade-down-25 absolute left-1/2 top-[330px] size-[1700px] -translate-x-1/2 rounded-full border border-[rgba(110,110,240,.1)]" />
      <span className="absolute left-[calc(50%-345px)] top-[493px] size-[5px] rounded-full bg-[#c9c6ff] shadow-[0_0_6px_2px_rgba(170,160,255,.9),0_0_22px_8px_rgba(120,110,255,.35)]" />
      <span className="absolute left-[calc(50%+440px)] top-[600px] size-[5px] rounded-full bg-[#b8d4ff] shadow-[0_0_6px_2px_rgba(140,190,255,.9),0_0_22px_8px_rgba(90,140,255,.35)]" />
    </div>
  );
}
