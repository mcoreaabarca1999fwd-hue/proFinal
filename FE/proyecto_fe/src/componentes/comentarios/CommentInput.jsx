import { Avatar, Box, TextField, Button } from "@mui/material";

export default function CommentInput() {
  return (
    <Box display="flex" gap={2}>
      <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0KXkuOr..." />

      <Box flex={1}>
        <TextField
          multiline
          rows={2}
          fullWidth
          placeholder="Añade tu comentario..."
        />

        <Button
          variant="contained"
          sx={{ mt: 1, ml: "auto", display: "block", borderRadius: 10 }}
        >
          Comentar
        </Button>
      </Box>
    </Box>
  );
}