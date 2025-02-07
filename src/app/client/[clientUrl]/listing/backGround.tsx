import Image from 'next/image';



const BackgroundImage = ({ imageUrl, children, className }: { imageUrl: string, children: React.ReactNode, className: string }) => {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={imageUrl}
          alt="Background"
          fill
          priority
          quality={75}
          sizes="100vw"
          style={{
            objectFit: 'contain',
            zIndex: 0,
            position: 'absolute'
          }}
        />
        {children}
      </div>
    );
  };

  export default BackgroundImage;