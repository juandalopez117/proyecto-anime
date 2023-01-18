export default function validate(score) {
  if (1 <= score && score <= 4) {
    return 0;
  }
  if (5 <= score && score <= 7) {
    return 1;
  }
  if (7 <= score) {
    return 2;
  }
}
