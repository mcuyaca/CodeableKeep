export type Note = {
  title: string;
  body: string;
  color: string;
  id: string;
  pinned: boolean;
  deleted: boolean;
};

export type AsideProps = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type ColorPickerProps = {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  username: string;
  setCurrentNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  id: string;
};

export type HeadersProps = {
  username: string;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MessageProps = {
  message: string;
};

export type NoteProps = {
  setCurrentNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  data: Note;
  username: string;
};

export type NotesContainerProps = {
  username: string;
  notes: Note[];
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NotesFormProps = {
  url: string;
  setCurrentNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  username: string;
};

export type OtherNotesProps = {
  setCurrentNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  currentNotes: Note[];
  username: string;
};

export type PinnedNotesProps = {
  setCurrentNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  currentNotes: Note[];
  username: string;
};

export type TrashNotesProps = {
  setCurrentNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  currentNotes: Note[];
  username: string;
};

export type WelcomeProps = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};
