import { BaseComponent, Components, Splide} from '@splidejs/splide';


/**
 * The extension for adding page number to slide
  *
 * @since 0.1.0
 *
 * @param Splide     - A Splide instance.
 * @param Components - A collection of components.
 *
 * @return A Number component object.
 */
export function Number( Splide: Splide, Components: Components ): BaseComponent {
  const { track } = Components.Elements;

  let elm: HTMLDivElement;

  function mount() {
    elm = document.createElement( 'div' );
    elm.classList.add('splide__number');
    track.parentElement.insertBefore( elm, track.nextSibling );

    update();
    Splide.on( 'move', update );
  }

  function update() {
    elm.textContent = `${ Splide.index + 1 }/${ Splide.length }`;
  }

  return {
    mount,
  };
}
