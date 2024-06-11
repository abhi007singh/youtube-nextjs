import AppBar from "./AppBar";

export default function Layout(props: any) {
  return (
    <>
      <AppBar isOpen={props.isOpen} handleClick={props.handleClick} />
      <main>{props.children}</main>
    </>
  );
}
