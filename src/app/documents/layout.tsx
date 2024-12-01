interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default DocumentsLayout;
