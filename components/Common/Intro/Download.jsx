import Link from "next/link";
const Download = ({ icon }) => {
  return (
    <>
      <Link href='/sayeef-resume.pdf' target='_blank' className='text-LightGray flex flex-row items-center justify-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
