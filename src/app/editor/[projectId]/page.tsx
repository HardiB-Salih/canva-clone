import Editor from "@/features/editor/components/editor";

interface EditorProjectIdProps {
  params: {
    projectId: string;
  };
}

export default function EditorProjectId({
  params: { projectId },
}: EditorProjectIdProps) {
  return <Editor />;
}
